import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = async (id: string) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
};

export const useProduct = (id: string) => {
    return useQuery({ queryKey: ["product", id], queryFn: () => fetchProduct(id), enabled: !!id });
};
