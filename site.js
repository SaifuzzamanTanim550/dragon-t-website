/* ==========================================================================
   SITE DETAILS
   Address, hours, links, and the short bits of text that appear in more than
   one place. Edit this file to update the whole site.
   ========================================================================== */

export const site = {
  name: 'Dragon T Bubble Tea',
  shortName: 'Dragon T',

  /* Set this to false on opening day. It switches the "opening soon" notices
     off across the whole site in one move. */
  comingSoon: true,

  address: {
    street: '685 Nostrand Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11216',
    /* Used for the "Get directions" link. */
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=685+Nostrand+Avenue+Brooklyn+NY+11216',
    /* Nearest subway. Edit if you would rather list a different line. */
    transit: 'A and C at Nostrand Avenue',
  },

  instagram: {
    handle: '@dragon___t',
    url: 'https://www.instagram.com/dragon___t/',
  },

  /* --- Hours -------------------------------------------------------------
     TO DO: replace these with your real opening hours before launch.
     Use null for closed, e.g. { day: 'Monday', open: null }               */
  hours: [
    { day: 'Monday', open: '11:00am', close: '9:00pm' },
    { day: 'Tuesday', open: '11:00am', close: '9:00pm' },
    { day: 'Wednesday', open: '11:00am', close: '9:00pm' },
    { day: 'Thursday', open: '11:00am', close: '9:00pm' },
    { day: 'Friday', open: '11:00am', close: '10:00pm' },
    { day: 'Saturday', open: '12:00pm', close: '10:00pm' },
    { day: 'Sunday', open: '12:00pm', close: '8:00pm' },
  ],

  /* TO DO: add your phone number and email when you have them.
     Leave as null and the site simply will not show them. */
  phone: null,
  email: null,
}

/* Navigation. Order here is the order in the menu bar. */
export const navLinks = [
  { label: 'Menu', to: '/menu' },
  { label: 'Our story', to: '/about' },
  { label: 'Visit', to: '/visit' },
  { label: 'Photos', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]
