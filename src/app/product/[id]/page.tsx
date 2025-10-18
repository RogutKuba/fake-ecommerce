import Link from 'next/link';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <Link href='/' className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>Shirt Store</h1>
            </Link>
            <Link
              href='/'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Product Image */}
            <div className='aspect-square relative'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover'
              />
              {!product.inStock && (
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                  <span className='text-white font-semibold text-xl'>
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className='p-8'>
              <div className='mb-6'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                  {product.name}
                </h1>
                <div className='flex items-center mb-4'>
                  <span className='text-4xl font-bold text-gray-900'>
                    ${product.price}
                  </span>
                  <span className='ml-4 text-sm text-gray-500'>
                    {product.category}
                  </span>
                </div>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  {product.description}
                </p>
              </div>

              {/* Product Options */}
              <div className='space-y-6'>
                {/* Colors */}
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    Colors
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className='flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-full'
                      >
                        <div
                          className='w-4 h-4 rounded-full border border-gray-300'
                          style={{
                            backgroundColor: color
                              .toLowerCase()
                              .includes('white')
                              ? '#ffffff'
                              : color.toLowerCase().includes('black')
                              ? '#000000'
                              : color.toLowerCase().includes('red')
                              ? '#ef4444'
                              : color.toLowerCase().includes('blue')
                              ? '#3b82f6'
                              : color.toLowerCase().includes('green')
                              ? '#22c55e'
                              : color.toLowerCase().includes('yellow')
                              ? '#eab308'
                              : color.toLowerCase().includes('purple')
                              ? '#a855f7'
                              : color.toLowerCase().includes('pink')
                              ? '#ec4899'
                              : color.toLowerCase().includes('orange')
                              ? '#f97316'
                              : color.toLowerCase().includes('gray')
                              ? '#6b7280'
                              : color.toLowerCase().includes('navy')
                              ? '#1e3a8a'
                              : color.toLowerCase().includes('coral')
                              ? '#ff7f50'
                              : color.toLowerCase().includes('charcoal')
                              ? '#374151'
                              : color.toLowerCase().includes('olive')
                              ? '#84cc16'
                              : '#d1d5db',
                          }}
                        />
                        <span className='text-sm text-gray-700'>{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    Available Sizes
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className='px-4 py-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors'
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className='pt-6'>
                  <button
                    disabled={!product.inStock}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                      product.inStock
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>

                {/* Product Info */}
                <div className='pt-6 border-t border-gray-200'>
                  <div className='grid grid-cols-2 gap-4 text-sm text-gray-600'>
                    <div>
                      <span className='font-semibold'>Category:</span>{' '}
                      {product.category}
                    </div>
                    <div>
                      <span className='font-semibold'>Availability:</span>{' '}
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            You might also like
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products
              .filter(
                (p) => p.id !== product.id && p.category === product.category
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group'
                >
                  <div className='aspect-square relative overflow-hidden'>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='font-semibold text-gray-900 mb-2 line-clamp-2'>
                      {relatedProduct.name}
                    </h3>
                    <div className='flex items-center justify-between'>
                      <span className='text-lg font-bold text-gray-900'>
                        ${relatedProduct.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-white border-t mt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='text-center text-gray-600'>
            <p>&copy; 2024 Shirt Store. All rights reserved.</p>
            <p className='mt-2 text-sm'>Premium clothing for every occasion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
