// hooks/useProfile.ts
import { useEffect, useState } from "react";
import { getProfileByIdService } from "@/libs/authService";

export function useProfile(userId: string) {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return; // esperar a que exista el ID

    async function fetchProfile() {
      try {
        const data = await getProfileByIdService(userId);
        setProfile(data);
      } catch (e: any) {
        setError(e.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
}
