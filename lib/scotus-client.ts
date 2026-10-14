export function formatVotes(majority: number | null, minority: number | null): string {
  if (majority === null) {
    return '';
  }

  if (minority === null) {
    return `${majority}-0`;
  }

  return `${majority}-${minority}`;
}

export function directionColor(direction: string): string {
  if (direction === 'Conservative') {
    return 'bg-red-100 text-red-800';
  }

  if (direction === 'Liberal') {
    return 'bg-blue-100 text-blue-800';
  }

  return 'bg-gray-100 text-gray-800';
}
