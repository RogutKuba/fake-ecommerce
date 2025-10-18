import Link from 'next/link';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>Shirt Store</h1>
            </div>
            <div className='flex items-center space-x-4'>
              <span className='text-sm text-gray-500'>30 Products</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Our Collection
          </h2>
          <p className='text-gray-600'>
            Discover our premium selection of shirts and clothing
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group'
            >
              <div className='aspect-square relative overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
                {!product.inStock && (
                  <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <span className='text-white font-semibold'>
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-gray-900 mb-2 line-clamp-2'>
                  {product.name}
                </h3>
                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                  {product.description}
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-gray-900'>
                    ${product.price}
                  </span>
                  <div className='flex items-center space-x-1'>
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className='w-3 h-3 rounded-full border border-gray-300'
                        style={{
                          backgroundColor: color.toLowerCase().includes('white')
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
                    ))}
                  </div>
                </div>
                <div className='mt-2 text-xs text-gray-500'>
                  Available in: {product.sizes.join(', ')}
                </div>
              </div>
            </Link>
          ))}
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
