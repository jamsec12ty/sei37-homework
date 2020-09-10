# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Planet.destroy_all

Planet.create(
  name: 'Earth',
  image: 'https://scitechdaily.com/images/earth-losing-mass.jpg',
  orbit: 1,
  diameter: 1,
  mass: 1,
  moons: 1
)
Planet.create(
  name: 'Mars',
  image: 'https://space-facts.com/wp-content/uploads/mars.jpg',
  orbit: 687,
  diameter: 0.1,
  mass: 0.2,
  moons: 2
)
Planet.create(
  name: 'Venus',
  image: 'https://cdn.mos.cms.futurecdn.net/pNX8eVGowB6WT8tyrTMufk-1200-80.jpg',
  orbit: 200,
  diameter: 0.3,
  mass: 2,
  moons: 1
)
Planet.create(
  name: 'Jupiter',
  image: 'http://cdn.sci-news.com/images/enlarge4/image_5608_2e-Jupiter.jpg',
  orbit: 120,
  diameter: 2,
  mass: 1,
  moons: 1
)

puts "Done! Created #{ Planet.count} planets:"
puts Planet.pluck(:name).join(', ')
