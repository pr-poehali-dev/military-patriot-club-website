import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const news = [
    {
      id: 1,
      title: "Военно-тактические учения",
      date: "20 июля 2025",
      description: "Успешно проведены летние учения по тактической подготовке",
      type: "Мероприятие"
    },
    {
      id: 2,
      title: "День защитника Отечества",
      date: "23 февраля 2025",
      description: "Торжественное мероприятие в честь Дня защитника Отечества",
      type: "Праздник"
    },
    {
      id: 3,
      title: "Набор новобранцев",
      date: "15 июля 2025",
      description: "Открыт набор в военно-патриотический клуб для молодежи 14-18 лет",
      type: "Объявление"
    }
  ];

  const activities = [
    { icon: "Target", title: "Стрелковая подготовка", description: "Обучение навыкам меткой стрельбы" },
    { icon: "Map", title: "Тактическая подготовка", description: "Изучение военной тактики и стратегии" },
    { icon: "Compass", title: "Ориентирование", description: "Навыки ориентирования на местности" },
    { icon: "Shield", title: "Строевая подготовка", description: "Дисциплина и порядок" }
  ];

  return (
    <div className="min-h-screen bg-military-dark">
      {/* Навигация */}
      <nav className="bg-military-green/90 backdrop-blur-sm border-b border-military-brown/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="text-white" size={32} />
              <h1 className="text-xl font-oswald font-bold text-white">ВОЕННО-ПАТРИОТИЧЕСКИЙ КЛУБ</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-military-brown transition-colors font-roboto">Главная</a>
              <a href="#events" className="text-white hover:text-military-brown transition-colors font-roboto">Мероприятия</a>
              <a href="#gallery" className="text-white hover:text-military-brown transition-colors font-roboto">Галерея</a>
              <a href="#contact" className="text-white hover:text-military-brown transition-colors font-roboto">Контакты</a>
            </div>
            <Button size="sm" className="md:hidden bg-military-brown hover:bg-military-brown/80">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический раздел */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-military-dark to-military-green/20">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgyMFYyMEgwVjBaIiBmaWxsPSIjMkQ0QTJCIi8+CjxwYXRoIGQ9Ik0wIDEwSDE0VjIwSDBWMTBaIiBmaWxsPSIjOEI0NTEzIi8+CjxwYXRoIGQ9Ik02IDZIMjBWMTRINlY2WiIgZmlsbD0iIzRBNUQzQSIvPgo8L3N2Zz4K')",
            backgroundRepeat: "repeat"
          }}
        />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-military-brown text-white font-oswald">СЛУЖИМ ОТЕЧЕСТВУ</Badge>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 leading-tight">
            ВОЕННО-ПАТРИОТИЧЕСКИЙ<br />
            <span className="text-military-brown">КЛУБ</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-roboto max-w-2xl mx-auto">
            Воспитываем патриотов, готовых служить Родине. Развиваем военные навыки, укрепляем дисциплину и формируем характер защитника Отечества.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-military-brown hover:bg-military-brown/80 text-white font-oswald">
              <Icon name="Users" className="mr-2" size={20} />
              ВСТУПИТЬ В КЛУБ
            </Button>
            <Button size="lg" variant="outline" className="border-military-brown text-military-brown hover:bg-military-brown hover:text-white font-oswald">
              <Icon name="Calendar" className="mr-2" size={20} />
              РАСПИСАНИЕ
            </Button>
          </div>
        </div>
      </section>

      {/* Деятельность клуба */}
      <section className="py-20 bg-military-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-military-green text-white font-oswald">НАША ДЕЯТЕЛЬНОСТЬ</Badge>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4">
              НАПРАВЛЕНИЯ ПОДГОТОВКИ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-roboto">
              Комплексная военно-патриотическая подготовка молодежи по всем основным направлениям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-military-green/10 border-military-brown/20 hover:border-military-brown/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-military-brown rounded-lg flex items-center justify-center mb-4">
                    <Icon name={activity.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-white font-oswald">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center font-roboto">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Новости и объявления */}
      <section id="events" className="py-20 bg-military-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-military-brown text-white font-oswald">АКТУАЛЬНАЯ ИНФОРМАЦИЯ</Badge>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4">
              НОВОСТИ И ОБЪЯВЛЕНИЯ
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="bg-military-dark/50 border-military-brown/20 hover:border-military-brown/40 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-military-brown text-military-brown">
                      {item.type}
                    </Badge>
                    <span className="text-sm text-gray-400 font-roboto">{item.date}</span>
                  </div>
                  <CardTitle className="text-white font-oswald">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 font-roboto">
                    {item.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 text-military-brown hover:text-white hover:bg-military-brown p-0 font-roboto">
                    Подробнее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 bg-military-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-military-green text-white font-oswald">НАШИ ДОСТИЖЕНИЯ</Badge>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4">
              ГАЛЕРЕЯ МЕРОПРИЯТИЙ
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <img 
                src="/img/f0429ec6-d8c1-4e6c-b087-f6de8c87cfca.jpg" 
                alt="Военные учения" 
                className="w-full h-64 object-cover rounded-lg border border-military-brown/20"
              />
              <div className="absolute inset-0 bg-military-dark/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="ZoomIn" size={32} className="mx-auto mb-2" />
                  <p className="font-oswald">Тактические учения</p>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img 
                src="/img/d46cff07-338a-44fa-a0d2-6ed826e0fa06.jpg" 
                alt="Военная техника" 
                className="w-full h-64 object-cover rounded-lg border border-military-brown/20"
              />
              <div className="absolute inset-0 bg-military-dark/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="ZoomIn" size={32} className="mx-auto mb-2" />
                  <p className="font-oswald">Военная техника</p>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer bg-military-green/10 border border-military-brown/20 rounded-lg flex items-center justify-center h-64">
              <div className="text-center text-white">
                <Icon name="Plus" size={48} className="mx-auto mb-4 text-military-brown" />
                <p className="font-oswald text-military-brown">Больше фото</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-military-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-military-brown text-white font-oswald">СВЯЗЬ С НАМИ</Badge>
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-4">
              КОНТАКТНАЯ ИНФОРМАЦИЯ
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-military-dark/50 border-military-brown/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-military-brown rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-white" size={32} />
                </div>
                <CardTitle className="text-white font-oswald">АДРЕС</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 font-roboto">
                  ул. Военная, д. 15<br />
                  г. Москва, 123456
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-military-dark/50 border-military-brown/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-military-brown rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-white" size={32} />
                </div>
                <CardTitle className="text-white font-oswald">ТЕЛЕФОН</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 font-roboto">
                  +7 (495) 123-45-67<br />
                  +7 (495) 765-43-21
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-military-dark/50 border-military-brown/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-military-brown rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-white" size={32} />
                </div>
                <CardTitle className="text-white font-oswald">ЭЛЕКТРОННАЯ ПОЧТА</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 font-roboto">
                  info@voenclub.ru<br />
                  director@voenclub.ru
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-military-dark py-12 border-t border-military-brown/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Shield" className="text-military-brown" size={32} />
              <h3 className="text-xl font-oswald font-bold text-white">ВОЕННО-ПАТРИОТИЧЕСКИЙ КЛУБ</h3>
            </div>
            <p className="text-gray-400 mb-6 font-roboto">
              Воспитываем настоящих защитников Отечества
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-military-brown transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-military-brown transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-military-brown transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-500 font-roboto">
              © 2025 Военно-патриотический клуб. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;