import { Category, Letter } from '@/types';
import { CATEGORIES } from '@/data/categories';

interface StructuredDataProps {
  type: 'website' | 'category' | 'letter';
  category?: Category;
  letter?: Letter;
}

export default function StructuredData({ type, category, letter }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://conlexico.com';
    
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ConLéxico',
          description: 'Descubre palabras en español organizadas por categorías y letras del alfabeto',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'ConLéxico',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          }
        };
        
      case 'category':
        if (!category) return null;
        const categoryInfo = CATEGORIES[category];
        return {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${categoryInfo.displayName} - ConLéxico`,
          description: categoryInfo.description,
          url: `${baseUrl}/${category}`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'ConLéxico',
            url: baseUrl
          },
          about: {
            '@type': 'Thing',
            name: categoryInfo.displayName,
            description: categoryInfo.description
          }
        };
        
      case 'letter':
        if (!category || !letter) return null;
        const letterCategoryInfo = CATEGORIES[category];
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${letterCategoryInfo.displayName} con ${letter.toUpperCase()} - ConLéxico`,
          description: `Lista completa de ${letterCategoryInfo.displayName.toLowerCase()} que empiezan con la letra ${letter.toUpperCase()}`,
          url: `${baseUrl}/${category}/${letter}`,
          isPartOf: {
            '@type': 'CollectionPage',
            name: `${letterCategoryInfo.displayName} - ConLéxico`,
            url: `${baseUrl}/${category}`
          },
          about: {
            '@type': 'Thing',
            name: `${letterCategoryInfo.displayName} con ${letter.toUpperCase()}`,
            description: `Palabras de ${letterCategoryInfo.displayName.toLowerCase()} que comienzan con ${letter.toUpperCase()}`
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: baseUrl
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: letterCategoryInfo.displayName,
                item: `${baseUrl}/${category}`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: `Letra ${letter.toUpperCase()}`,
                item: `${baseUrl}/${category}/${letter}`
              }
            ]
          }
        };
        
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
