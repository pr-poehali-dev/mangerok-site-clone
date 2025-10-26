import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const attractions = [
  {
    icon: 'Cable Car',
    title: 'Канатная дорога',
    description: 'Современная канатная дорога длиной 2400 метров с панорамным видом на Алтайские горы',
  },
  {
    icon: 'Trees',
    title: 'Озеро Манжерок',
    description: 'Живописное горное озеро с кристально чистой водой, идеально для летнего отдыха',
  },
  {
    icon: 'Mountain',
    title: 'Гора Малая Синюха',
    description: 'Вершина высотой 1196 метров с потрясающими видами на долину реки Катунь',
  },
  {
    icon: 'Camera',
    title: 'Смотровые площадки',
    description: 'Несколько оборудованных площадок для фотосъемки живописных пейзажей',
  },
  {
    icon: 'TreePine',
    title: 'Кедровая роща',
    description: 'Древний кедровый лес с экологическими тропами для прогулок',
  },
  {
    icon: 'Landmark',
    title: 'Этнопарк',
    description: 'Знакомство с культурой и бытом алтайского народа, традиционные юрты',
  },
];

export default function Attractions() {
  return (
    <section id="attractions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Достопримечательности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте природные и культурные богатства курорта Манжерок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={attraction.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{attraction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {attraction.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
