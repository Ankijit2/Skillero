import { useQuery } from "@tanstack/react-query";
import { apiClient } from "~/lib/api-client";

export function getCourses() {
    return apiClient.get("v1/course");
}