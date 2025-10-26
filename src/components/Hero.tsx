import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/998baac6-5539-4ab2-addd-43e9db37f084/files/f019782b-f134-4871-9fda-0359a0996cc4.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Горнолыжный курорт Манжерок
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Откройте для себя красоту Алтайских гор. Незабываемый отдых круглый год в сердце природы
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать
          </Button>
          <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white text-foreground text-lg px-8 py-6">
            <Icon name="Info" size={20} className="mr-2" />
            Узнать больше
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-white" />
      </div>
    </section>
  );
}
