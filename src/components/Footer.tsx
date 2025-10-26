import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mountain" size={28} className="text-primary" />
              <span className="text-xl font-bold">Манжерок</span>
            </div>
            <p className="text-white/70">
              Горнолыжный курорт в самом сердце Алтайских гор
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#attractions" className="text-white/70 hover:text-primary transition-colors">Достопримечательности</a></li>
              <li><a href="#activities" className="text-white/70 hover:text-primary transition-colors">Развлечения</a></li>
              <li><a href="#accommodation" className="text-white/70 hover:text-primary transition-colors">Проживание</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#news" className="text-white/70 hover:text-primary transition-colors">Новости</a></li>
              <li><a href="#contacts" className="text-white/70 hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">О курорте</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors">Правила посещения</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (38844) 2-55-55
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@manjerok.ru
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>Республика Алтай, с. Манжерок</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 Курорт Манжерок. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
