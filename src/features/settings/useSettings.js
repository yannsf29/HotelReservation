import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    querykey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
