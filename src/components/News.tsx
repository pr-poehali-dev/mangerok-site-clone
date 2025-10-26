import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const news = [
  {
    date: '15 октября 2024',
    category: 'События',
    title: 'Открытие зимнего сезона 2024-2025',
    description: 'С 1 декабря начинает работу горнолыжный комплекс. Новые трассы и улучшенная инфраструктура ждут гостей!',
    icon: 'Snowflake',
  },
  {
    date: '8 октября 2024',
    category: 'Акции',
    title: 'Скидка 20% на раннее бронирование',
    description: 'Забронируйте проживание до 1 ноября и получите скидку 20% на все услуги курорта.',
    icon: 'Tag',
  },
  {
    date: '1 октября 2024',
    category: 'Инфраструктура',
    title: 'Новый ресторан "Вершина"',
    description: 'На высоте 1000 метров открылся панорамный ресторан с видом на горы и авторской кухней.',
    icon: 'UtensilsCrossed',
  },
  {
    date: '25 сентября 2024',
    category: 'События',
    title: 'Фестиваль "Краски Алтая"',
    description: 'Осенний фестиваль культуры с выставками, концертами и мастер-классами прошел с большим успехом.',
    icon: 'Music',
  },
];

export default function News() {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Актуальные события и акции курорта Манжерок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
