import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contactEmail = 'ismansour212@gmail.com';

const policySections = [
  {
    title: 'مقدمة عن تطبيق Noor',
    content:
      'Noor هو تطبيق إسلامي يساعد المستخدمين على الوصول إلى القرآن الكريم، الأذكار، السبحة الإلكترونية، أوقات الصلاة، والإشعارات التي تدعم الاستخدام اليومي للتطبيق بطريقة بسيطة ومنظمة.',
  },
  {
    title: 'البيانات التي يتم جمعها',
    content:
      'لا يجمع تطبيق Noor بيانات شخصية من المستخدمين، ولا يطلب إنشاء حساب، ولا يقوم ببيع أو مشاركة بيانات شخصية مع أطراف خارجية. قد يتم تخزين بعض البيانات محليًا على جهاز المستخدم، مثل التفضيلات أو الإعدادات أو سجلات الاستخدام داخل التطبيق، وذلك لتحسين التجربة وتسهيل الوصول إلى الخصائص المفضلة.',
  },
  {
    title: 'الأذونات المستخدمة',
    content:
      'يستخدم التطبيق إذن الإشعارات لإرسال التنبيهات والتذكيرات المرتبطة بالأذكار أو أوقات الصلاة أو محتوى التطبيق. كما قد يستخدم إذن الإنترنت عند الحاجة لتحميل المحتوى أو تحديثه أو تحسين توفر بعض الخصائص التي تحتاج اتصالًا بالشبكة.',
  },
  {
    title: 'خدمات الطرف الثالث',
    content:
      'قد يستخدم التطبيق مستقبلًا خدمات من Google مثل Google AdMob أو خدمات أخرى لتحسين التجربة أو دعم التطبيق. في حال إضافة أي خدمة خارجية تؤثر على طريقة التعامل مع البيانات، سيتم تحديث سياسة الخصوصية لتوضيح طبيعة الخدمة والبيانات المرتبطة بها.',
  },
  {
    title: 'حماية البيانات',
    content:
      'نحرص على تقليل البيانات المستخدمة داخل التطبيق إلى الحد اللازم لتشغيل الخصائص الأساسية وتحسين تجربة المستخدم. وبما أن التطبيق لا يجمع بيانات شخصية، فإن البيانات المرتبطة بالاستخدام تبقى محدودة ومحلية على جهاز المستخدم عند الحاجة.',
  },
  {
    title: 'حقوق المستخدم',
    content:
      'يمكن للمستخدم التحكم في أذونات التطبيق من إعدادات الجهاز في أي وقت، بما في ذلك تفعيل أو تعطيل الإشعارات. كما يمكن حذف البيانات المحلية الخاصة بالتطبيق عن طريق مسح بيانات التطبيق من إعدادات الجهاز أو إلغاء تثبيت التطبيق.',
  },
  {
    title: 'تحديث سياسة الخصوصية',
    content:
      'قد يتم تحديث هذه السياسة من وقت لآخر عند إضافة خصائص جديدة أو تعديل طريقة عمل التطبيق. سيتم نشر أي تحديث على هذه الصفحة، ويعد استمرار استخدام التطبيق بعد نشر التحديث موافقة على النسخة الجديدة من السياسة.',
  },
];

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="brand-mark" aria-hidden="true">
          نور
        </div>
        <div className="hero-content">
          <p className="eyebrow">Noor Privacy Policy</p>
          <h1 id="page-title">سياسة الخصوصية - تطبيق Noor</h1>
          <p className="hero-text">
            صفحة رسمية توضح كيفية تعامل تطبيق Noor مع الخصوصية، البيانات، الأذونات،
            وخدمات الطرف الثالث.
          </p>
        </div>
      </section>

      <section className="policy-card" aria-label="محتوى سياسة الخصوصية">
        <div className="summary-panel">
          <div>
            <span className="summary-label">آخر تحديث</span>
            <strong>4 أغسطس 2026</strong>
          </div>
          <div>
            <span className="summary-label">التطبيق</span>
            <strong>Noor</strong>
          </div>
          <div>
            <span className="summary-label">نوع الصفحة</span>
            <strong>سياسة خصوصية</strong>
          </div>
        </div>

        <div className="sections-grid">
          {policySections.map((section, index) => (
            <article className="policy-section" key={section.title}>
              <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </article>
          ))}

          <article className="policy-section contact-section">
            <span className="section-number">08</span>
            <div>
              <h2>التواصل</h2>
              <p>
                للاستفسار حول سياسة الخصوصية أو طلب أي توضيحات، يمكن التواصل عبر البريد
                الإلكتروني:
              </p>
              <a href={`mailto:${contactEmail}`} className="email-link">
                {contactEmail}
              </a>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <span>Noor</span>
        <span>سياسة الخصوصية الرسمية لاستخدام التطبيق على Google Play</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
