import React, { useEffect, useState } from 'react';\nimport ProductCard from '../components/ProductCard';\nimport { fetchProducts } from '../services/api';\n\nfunction Products() {\n  const [products, setProducts] = useState([]);\n\n  useEffect(() => {\n    const getProducts = async () => {\n      const data = await fetchProducts();\n      setProducts(data);\n    };\n\n    getProducts();\n  }, []);\n\n  return (\n    <main>\n      <h1>Products</h1>\n      <div className="product-list">\n        {products.map(product => (\n          <ProductCard key={product.id} product={product} />\n        ))}\n      </div>\n    </main>\n  );\n}\n\nexport default Products;