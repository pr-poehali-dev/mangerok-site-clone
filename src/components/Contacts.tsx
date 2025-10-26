import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    content: 'Республика Алтай, с. Манжерок, ул. Курортная, 1',
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    content: '+7 (38844) 2-55-55',
  },
  {
    icon: 'Mail',
    title: 'Email',
    content: 'info@manjerok.ru',
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    content: 'Ежедневно с 9:00 до 21:00',
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования и консультаций
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={info.icon as any} size={20} className="text-primary" />
                      </div>
                      <CardTitle className="text-sm font-semibold text-muted-foreground">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle>Мы в социальных сетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
