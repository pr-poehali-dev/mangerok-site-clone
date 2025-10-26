import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const activities = [
  {
    title: 'Горнолыжный спорт',
    season: 'Зима',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/f019782b-f134-4871-9fda-0359a0996cc4.jpg',
    icon: 'Mountain Snow',
    description: '8 трасс различной сложности, современные подъемники',
  },
  {
    title: 'Катание на лошадях',
    season: 'Круглый год',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/eea69dd3-1ccb-435b-a1d4-6f19c1a6f5cd.jpg',
    icon: 'Heart',
    description: 'Конные прогулки по живописным горным тропам',
  },
  {
    title: 'Водные развлечения',
    season: 'Лето',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/eea69dd3-1ccb-435b-a1d4-6f19c1a6f5cd.jpg',
    icon: 'Waves',
    description: 'Катамараны, SUP-серфинг, рыбалка на озере',
  },
  {
    title: 'Пешие походы',
    season: 'Лето-Осень',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/eea69dd3-1ccb-435b-a1d4-6f19c1a6f5cd.jpg',
    icon: 'Footprints',
    description: 'Маршруты разной сложности с опытными проводниками',
  },
  {
    title: 'Зиплайн',
    season: 'Круглый год',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/f019782b-f134-4871-9fda-0359a0996cc4.jpg',
    icon: 'Zap',
    description: 'Экстремальный спуск над горным ущельем',
  },
  {
    title: 'Квадроциклы',
    season: 'Лето',
    image: 'https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/eea69dd3-1ccb-435b-a1d4-6f19c1a6f5cd.jpg',
    icon: 'Truck',
    description: 'Джип-туры и прокат квадроциклов для активных туристов',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Развлечения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Активный отдых для всей семьи в любое время года
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white">
                    {activity.season}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={activity.icon as any} size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
