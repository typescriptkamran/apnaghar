import { supabase } from "@/lib/supabaseClient";

export type AuthUser = {
  id: string;
  email: string;
  role?: string;
  firstName?: string;
  lastName?: string;
};

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  // Get user profile from profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, last_name, role")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    email: user.email || "",
    firstName: profile?.first_name,
    lastName: profile?.last_name,
    role: profile?.role || "user",
  };
}

export async function updateProfile(
  userId: string,
  data: {
    firstName?: string;
    lastName?: string;
    role?: string;
  },
) {
  const { error } = await supabase.from("profiles").upsert({
    id: userId,
    first_name: data.firstName,
    last_name: data.lastName,
    role: data.role,
    updated_at: new Date().toISOString(),
  });

  if (error) throw error;
}
