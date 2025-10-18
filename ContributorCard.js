import React from 'react'
export default function ContributorCard({ item }) {
  return (
    <div className='bg-white rounded-2xl shadow p-4'>
      <img src={item.thumbnail} alt={item.title} className='w-full h-48 object-cover rounded-md mb-3' />
      <h3 className='font-semibold text-lg'>{item.title}</h3>
      <p className='text-sm text-gray-500'>By {item.creator}</p>
      <div className='mt-2 flex items-center justify-between'>
        <div>
          <div className='text-sm text-gray-600'>Downloads</div>
          <div className='font-medium'>{item.downloads}</div>
        </div>
        <div className='w-40'>
          <div className='text-sm text-gray-600'>Performance</div>
          <div className='mt-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
            <div style={{ width: `${item.performance}%` }} className='h-2 bg-blue-500'></div>
          </div>
        </div>
      </div>
      <div className='mt-3 flex flex-wrap gap-2'>
        {item.keywords.map((k, i) => (
          <span key={i} className='text-xs bg-gray-100 px-2 py-1 rounded-full'>{k}</span>
        ))}
      </div>
    </div>
  )
}