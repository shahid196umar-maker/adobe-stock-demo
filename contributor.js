export default function handler(req, res) {
  const { search } = req.query;
  const sample = {
    contributorId: search || '211421583',
    name: 'Demo Contributor',
    totalAssets: 100,
    assets: Array.from({ length: 12 }).map((_, i) => ({
      id: `${search || '211421583'}-${i+1}`,
      title: `Sample Image ${i+1}`,
      creator: 'Demo Creator',
      downloads: Math.floor(Math.random() * 5000),
      performance: Math.floor(Math.random() * 100),
      thumbnail: `https://picsum.photos/seed/${(search||'demo') + i}/600/400`,
      keywords: ['demo', 'sample', 'stock', 'photo', `tag${i+1}`],
    })),
  };
  res.status(200).json(sample);
}