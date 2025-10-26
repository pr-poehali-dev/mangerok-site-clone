import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const accommodations = [
  {
    name: 'Гостиница "Горный приют"',
    type: 'Отель 3*',
    price: 'от 3500 ₽/ночь',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/8f5ff4dc-6049-4151-b0c7-8505ef51640a.jpg',
    features: ['Wi-Fi', 'Ресторан', 'Парковка', 'Сауна'],
  },
  {
    name: 'Коттеджи "Алтайская усадьба"',
    type: 'Коттеджи',
    price: 'от 8000 ₽/ночь',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/8f5ff4dc-6049-4151-b0c7-8505ef51640a.jpg',
    features: ['Камин', 'Кухня', 'BBQ', 'Терраса'],
  },
  {
    name: 'Гостевые домики "Эко-стиль"',
    type: 'Гостевой дом',
    price: 'от 2500 ₽/ночь',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/8f5ff4dc-6049-4151-b0c7-8505ef51640a.jpg',
    features: ['Завтрак', 'Вид на горы', 'Wi-Fi', 'Общая кухня'],
  },
];

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Проживание</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комфортное размещение на любой вкус и бюджет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{accommodation.name}</CardTitle>
                <CardDescription className="text-base">{accommodation.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {accommodation.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      <Icon name="Check" size={14} />
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-2xl font-bold text-primary">{accommodation.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Забронировать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
