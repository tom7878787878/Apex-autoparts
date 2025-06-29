import ProductCard from '../components/ProductCard'

const products = [
  {
    title: "Echo Dot (5th Gen)",
    image: "/amazon-logo.png",
    link: "https://www.amazon.com/dp/B09B8V8C3J?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
    price: "$49.99"
  },
  {
    title: "Fire TV Stick 4K",
    image: "/amazon-logo.png",
    link: "https://www.amazon.com/dp/B08XVYZ1Y5?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
    price: "$39.99"
  }
]

export default function Home() {
  return (
    <main>
      <h1>Amazon Affiliate Products</h1>
      <div style={{ display: 'flex', gap: 16 }}>
        {products.map((prod, idx) => (
          <ProductCard key={idx} {...prod} />
        ))}
      </div>
    </main>
  )
    }
