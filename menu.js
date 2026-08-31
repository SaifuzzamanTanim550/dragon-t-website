/* ==========================================================================
   THE MENU
   Add, remove, or edit drinks here and they update on every page.

   Each drink takes:
     id        a short unique name, lowercase with dashes
     name      what customers see
     category  must match one of the categories listed at the bottom
     note      one line describing the drink
     image     the filename to look for in public/images/drinks/
     price     a string like '6.25', or null to hide the price
     signature true puts it in the Dream 11 highlights on the home page
   ========================================================================== */

export const drinks = [
  /* --- Signature ------------------------------------------------------- */
  {
    id: 'creme-brulee-brown-sugar',
    name: 'Crème Brûlée Brown Sugar',
    category: 'signature',
    note: 'Brown sugar milk tea under a torched sugar crust. Cracks like the real thing.',
    image: 'creme-brulee-brown-sugar.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'milk-foam-brown-sugar',
    name: 'Milk Foam Brown Sugar',
    category: 'signature',
    note: 'The same brown sugar base, finished with a thick cap of salted milk foam.',
    image: 'milk-foam-brown-sugar.jpg',
    price: null,
    signature: true,
  },

  /* --- Milk tea -------------------------------------------------------- */
  {
    id: 'brown-sugar-milk-tea',
    name: 'Brown Sugar Milk Tea',
    category: 'milk-tea',
    note: 'Black tea and milk with brown sugar syrup striped down the cup.',
    image: 'brown-sugar-milk-tea.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'boba-milk-tea',
    name: 'Boba Milk Tea',
    category: 'milk-tea',
    note: 'The classic. Black tea, milk, and a full scoop of tapioca pearls.',
    image: 'boba-milk-tea.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'taro',
    name: 'Taro Milk Tea',
    category: 'milk-tea',
    note: 'Stone-ground taro blended with milk. Sweet, nutty, and purple all the way down.',
    image: 'taro.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    category: 'milk-tea',
    note: 'Strong spiced black tea cut with condensed milk.',
    image: 'thai-tea.jpg',
    price: null,
    signature: false,
  },
  {
    id: 'strawberry-milk-tea',
    name: 'Strawberry Milk Tea',
    category: 'milk-tea',
    note: 'Milk tea with real strawberry, served over crushed fruit.',
    image: 'strawberry-milk-tea.jpg',
    price: null,
    signature: false,
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'milk-tea',
    note: 'Ceremonial matcha poured over cold milk. Layered, not stirred.',
    image: 'matcha-latte.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'strawberry-matcha',
    name: 'Strawberry Matcha',
    category: 'milk-tea',
    note: 'Matcha over strawberry purée and milk. Three layers, one straw.',
    image: 'strawberry-matcha.jpg',
    price: null,
    signature: false,
  },

  /* --- Fruit and green tea --------------------------------------------- */
  {
    id: 'passion-fruit-green-tea',
    name: 'Passion Fruit Green Tea',
    category: 'fruit-tea',
    note: 'Green tea shaken with passion fruit. Tart, light, and loaded with pearls.',
    image: 'passion-fruit-green-tea.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'peach-green-tea',
    name: 'Peach Green Tea',
    category: 'fruit-tea',
    note: 'Green tea and peach over ice. The easy one on a hot day.',
    image: 'peach-green-tea.jpg',
    price: null,
    signature: false,
  },

  /* --- Slush and blended ------------------------------------------------ */
  {
    id: 'mango-slush',
    name: 'Mango Slush',
    category: 'slush',
    note: 'Blended mango topped with popping boba.',
    image: 'mango-slush.jpg',
    price: null,
    signature: true,
  },
  {
    id: 'mango-coconut',
    name: 'Mango Coconut',
    category: 'slush',
    note: 'Mango and coconut blended together, finished with mango popping boba.',
    image: 'mango-coconut.jpg',
    price: null,
    signature: false,
  },
]

/* Category labels shown on the filter bar, in order.
   The id must match the category field on each drink above. */
export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'signature', label: 'Signature' },
  { id: 'milk-tea', label: 'Milk tea' },
  { id: 'fruit-tea', label: 'Fruit and green tea' },
  { id: 'slush', label: 'Slush' },
]

/* Toppings list, shown on the menu page. */
export const toppings = [
  'Tapioca pearls',
  'Popping boba',
  'Lychee jelly',
  'Grass jelly',
  'Aloe vera',
  'Red bean',
  'Pudding',
  'Cheese foam',
]
