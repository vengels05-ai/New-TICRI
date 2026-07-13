import CaseDetailPageClient from '@/components/scotus/CaseDetailPageClient';

interface OpinionDetailPageProps {
  params: {
    id: string;
  };
}

export default function OpinionDetailPage({ params }: OpinionDetailPageProps) {
  return <CaseDetailPageClient id={params.id} />;
}
