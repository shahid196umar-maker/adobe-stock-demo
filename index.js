import React, { useState } from 'react'
import ContributorCard from '../components/ContributorCard'
export default function Home() {
  const [query, setQuery] = useState('211421583')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/contributor?search=${encodeURIComponent(query)}`)
      if (!res.ok) throw new Error('Network error')
      const json = await res.json()
      setData(json)
    } catch (err) {
      setError(err.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen py-10 px-4 md:px-10'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Adobe Stock Contributor Tracker — Demo</h1>
        <form onSubmit={handleSearch} className='flex gap-2 mb-6'>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='flex-1 border rounded-lg px-4 py-3'
            placeholder='Enter contributor ID (e.g. 211421583)'
          />
          <button className='bg-blue-600 text-white px-4 py-3 rounded-lg'>Search</button>
        </form>
        {loading && <div className='text-gray-600'>Loading...</div>}
        {error && <div className='text-red-600'>{error}</div>}
        {data && (
          <div>
            <div className='mb-4 text-sm text-gray-600'>Results for <strong>{data.contributorId}</strong> — Total assets: {data.totalAssets}</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {data.assets.map((item) => (
                <ContributorCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        {!data && <div className='mt-8 text-gray-600'>Try searching for contributor id <strong>211421583</strong> to see demo results.</div>}
      </div>
    </div>
  )
}