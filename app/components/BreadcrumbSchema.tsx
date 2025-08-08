interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Helper function to generate breadcrumbs for different pages
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const baseUrl = 'https://kalashvasaniya.com';
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: baseUrl }
  ];

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  pathSegments.forEach((segment, index) => {
    const url = baseUrl + '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment === 'blog' && index < pathSegments.length - 1 
      ? 'Blog'
      : segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
    
    breadcrumbs.push({ name, url });
  });

  return breadcrumbs;
}
