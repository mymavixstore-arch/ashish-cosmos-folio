import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ZoomIn, Camera } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

// Sample photos - In production, these would come from Google Drive API
const photos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    title: 'Mountain Sunrise',
    category: 'Nature',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
    title: 'Forest Path',
    category: 'Nature',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop',
    title: 'Code Setup',
    category: 'Tech',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&h=1080&fit=crop',
    title: 'Ocean Waves',
    category: 'Nature',
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
    title: 'Team Meeting',
    category: 'Portrait',
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop',
    title: 'Misty Valley',
    category: 'Nature',
  },
  {
    id: 7,
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
    title: 'Office Space',
    category: 'Tech',
  },
  {
    id: 8,
    thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&h=1080&fit=crop',
    title: 'Golden Fields',
    category: 'Nature',
  },
  {
    id: 9,
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
    full: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop',
    title: 'Tech Abstract',
    category: 'Tech',
  },
];

const categories = ['All', 'Nature', 'Portrait', 'Tech'];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = photos.filter(
    (photo) => activeCategory === 'All' || photo.category === activeCategory
  );

  return (
    <Layout>
      <section className="py-12">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Camera className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Photography Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Photo <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capturing moments through my lens. From breathtaking landscapes to intimate portraits,
              each photo tells a unique story.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium">{photo.title}</p>
                      <p className="text-xs text-muted-foreground">{photo.category}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.full}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="glass"
                  asChild
                >
                  <a href={selectedPhoto.full} download>
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="glass"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-xl">
                <p className="font-medium">{selectedPhoto.title}</p>
                <p className="text-xs text-muted-foreground">{selectedPhoto.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
