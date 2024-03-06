const pizzaMenu = [
  {
    id: 1,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/08/IMG_8106-cupnchar_sm.jpeg',
    title: 'cup & char pepperoni',
    description:
      'Red sauce, fresh mozzarella & shredded mozzarella with cup & char pepperoni topped with fresh basil',
    priceName: ['12″ small', '14″ medium', '16″ large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 2,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/08/IMG_8165-vodkapie_sm.jpeg',
    title: 'Vodka',
    description:
      'Vodka Sauce, fresh mozzarella, mushrooms, peas, basil & grilled chicken',
    priceName: ['12″ small', '14″ medium', '16″ large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 3,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/08/IMG_8171-diavolo_sm.jpeg',
    title: 'Diavolo',
    description:
      'Red sauce, salami, Calabrian peppers, fresh mozzarella, Garlic & pecorino ramano',
    priceName: ['12″ small', '14″ medium', '16″ large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 4,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/08/IMG_8109-verde_sm.jpeg',
    title: 'Verde',
    description: 'Pesto Sauce, mozzarella, broccoli, spinach, garlic & ricotta',
    priceName: ['12″ small', '14″ medium', '16″ large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 5,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/pizza_Margherita3.jpeg',
    title: 'MARGHERITA',
    description: 'Red Sauce, Fresh Mozzarella, Fresh Basil, Fresh Garlic',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 6,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-bianca-388x388.jpeg',
    title: 'BIANCA',
    description: 'Mozzarella, Whipped Ricotta, Fresh Garlic, Olive Oil',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 7,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-the-meats-388x388.jpeg',
    title: 'THE MEATS',
    description:
      'Red Sauce, Mozzarella, Pepperoni, Ham, Sausage, Crumbled Meatballs',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 8,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-veggie-388x388.jpeg',
    title: 'VEGGIE',
    description:
      'Red Sauce, Mozzarella, Red Onions, Green Peppers, Mushrooms, Black Olives',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 9,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-cheesesteak-388x388.jpeg',
    title: 'CHEESESTEAK',
    description:
      'Alfredo Sauce, Mozzarella, Steak, Mushrooms, Green Peppers, Red Onions',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 10,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-buffalo-chicken-388x388.jpeg',
    title: 'BUFFALO CHICKEN',
    description:
      'Ranch Sauce, Mozzarella, Grilled Chicken, Red Onions, Blue Cheese Crumbles, Buffalo Sauce Drizzle',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 11,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-bbq-chicken-bacon-388x388.jpeg',
    title: 'BBQ CHICKEN & BACON',
    description: 'BBQ Sauce, Mozzarella, Grilled Chicken, Red Onions, Bacon',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 12,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-hawaiian-388x388.jpeg',
    title: 'HAWAIIAN',
    description: 'Red Sauce, Mozzarella, Ham, Pineapple, Bacon',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 13,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-combo-388x388.jpeg',
    title: 'COMBO',
    description: 'Choice of 3 regular Toppings',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 14,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-supreme-388x388.jpeg',
    title: 'SUPREME',
    description:
      'Red Sauce, Mozzarella, Pepperoni, Sausage, Red Onions, Green Peppers, Mushrooms, Black Olives',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 15,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-chicken-pesto-388x388.jpeg',
    title: 'CHICKEN PESTO',
    description:
      'Alfredo, Pesto, Mozzarella, Chicken, Mushrooms, Shave Parmesan',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 16,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-spinach-artichoke-388x388.jpeg',
    title: 'SPINACH & ARTICHOKE',
    description:
      'Alfredo, Spinach, Mozzarella, Artichoke Hearts, Red Onions, Grilled Chicken, Bacon',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 17,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-florentine-388x388.jpeg',
    title: 'FLORENTINE',
    description:
      'Alfredo, Spinach, Mozzarella Cheese, Feta Cheese, Bacon, Red Onions',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
  {
    id: 18,
    image:
      'https://levantespizza.com/wp-content/uploads/2022/07/signature_pizzas-mediterranean-388x388.jpeg',
    title: 'MEDITERRANEAN',
    description:
      'Alfredo, Mozzarella, Kalamata Olives, Feta, Spinach, Red Roasted Peppers, Red Onions',
    priceName: ['12″ Small', '14″ Medium', '16″ Large'],
    priceValue: ['16.95', '18.95', '20.95'],
  },
];

export default pizzaMenu;
