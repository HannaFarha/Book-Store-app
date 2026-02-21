import "./services.css";

const Services = () => {
  return (
    <div className="services">
      {/* خدمة 1: الشحن */}
      <div className="service-item">
        <i className="bi bi-truck"></i>
        <div className="service-text">
          <b>توصيل سريع ومجاني</b>
          <span>لجميع الطلبات داخل البلد</span>
        </div>
      </div>

      {/* خدمة 2: الدعم */}
      <div className="service-item">
        <i className="bi bi-headset"></i> {/* أيقونة سماعة رأس أنسب للدعم */}
        <div className="service-text">
          <b>دعم فني متواصل</b>
          <span>خدمة عملاء 24/7</span>
        </div>
      </div>

      {/* خدمة 3: الاسترجاع */}
      <div className="service-item">
        <i className="bi bi-arrow-repeat"></i> {/* أيقونة استرجاع */}
        <div className="service-text">
          <b>ضمان استرجاع</b>
          <span>استرجاع سهل خلال 7 أيام</span>
        </div>
      </div>

      {/* خدمة 4: الهدايا */}
      <div className="service-item">
        <i className="bi bi-gift"></i>
        <div className="service-text">
          <b>بطاقات هدايا</b>
          <span>اسرق قلوب أحبائك بهدايا مميزة</span>
        </div>
      </div>
    </div>
  );
};

export default Services;