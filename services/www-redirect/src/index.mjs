const worker = {
  /** @param {Request} request */
  fetch(request) {
    const target = new URL(request.url);
    if (target.hostname !== 'www.ticri.org') {
      return new Response('Not found', { status: 404 });
    }

    target.protocol = 'https:';
    target.hostname = 'ticri.org';
    target.port = '';

    // Preserve methods and bodies for forms or API requests from old www tabs.
    const status = ['GET', 'HEAD'].includes(request.method) ? 301 : 308;
    return new Response(null, {
      status,
      headers: {
        Location: target.href,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};

export default worker;
