import { useState, useEffect } from "react"
import { getProductsService } from "@/libs/products/productService"
import { ProductDAO } from "@/interfaces/products/product"

export function useProducts() {
  const [products, setProducts] = useState<ProductDAO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsService()
        setProducts(data)
      } catch (err: any) {
        console.error("Error al cargar productos:", err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
