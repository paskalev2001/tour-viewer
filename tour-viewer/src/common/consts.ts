export default {
  routes: Object.freeze({
    home: Object.freeze({
      name: '',
      path: '/',
      title: 'Home',
    }),
    tour: Object.freeze({
      name: 'viewer',
      // path: '/:tourId?key=:key',
      path: '/viewer',
      title: 'Select a tour',
    }),
  })
}