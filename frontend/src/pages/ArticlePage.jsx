import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterInterestForm from '../components/RegisterInterestForm';
import SectionImageSlider from '../components/ImageSlider';

const articles = ['article1', 'article2', 'article3'];

const ArticlePage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();

  if (!articles.includes(slug)) {
    return <div className="text-center py-20 text-red-600 text-xl">{t('ARTICLE_NOT_FOUND', 'Article not found.')}</div>;
  }

  const articleData = {
    article1: {
      title: t('1ST_EVENT_TITLE'),
      date: t('1ST_EVENT_DATE'),
      bannerImage: '/jap.jpg',
      sections: [
        {
          heading: t('1ST_EVENT_POINTS'),
          content: t('1ST_EVENT_POINTS'),
          list: [
            t('1ST_EVENT_POINTS_1'),
            t('1ST_EVENT_POINTS_2'),
            t('1ST_EVENT_POINTS_3'),
            t('1ST_EVENT_POINTS_4'),
          ],
          images: ['/japan1.jpeg', '/blog1.jpg'],
        },
      ],
    },
    article2: {
      title: t('2ND_EVENT_TITLE'),
      date: t('2ND_EVENT_DATE'),
      bannerImage: '/tok.jpg',
      sections: [
        {
          heading: t('2ND_EVENT_HEADING'),
          content: t('2ND_EVENT_TEXT'),
          list: [
            t('2ND_EVENT_HIGHLIGHTS_1'),
            t('2ND_EVENT_HIGHLIGHTS_2'),
            t('2ND_EVENT_HIGHLIGHTS_3'),
          ],
          images: ['/tokyo.png', '/jip2.jpg', '/jip3.jpg', '/jip4.jpg', '/blog2.jpg'],
        },
      ],
    },
    article3: {
      title: t('3RD_EVENT_TITLE'),
      date: t('3RD_EVENT_DATE'),
      bannerImage: '/blog3.jpg',
      sections: [
        {
          heading: t('3RD_EVENT_HEADING'),
          content: t('3RD_EVENT_TEXT'),
          list: [
            t('3RD_EVENT_HIGHLIGHTS_1'),
            t('3RD_EVENT_HIGHLIGHTS_2'),
            t('3RD_EVENT_HIGHLIGHTS_3'),
          ],
          images: ['/eve1.jpg', '/eve2.jpg', '/eve3.jpg', '/eve4.jpg', '/eve5.jpg'],
        },
      ],
    },
  };

  const article = articleData[slug];

  return (
    <div className="relative">
      {/* Header */}
      <div className="p-2 md:p-4 bg-white overflow-hidden">
        <Header
          backgroundImage={article.bannerImage}
          showFilter={false}
          title=""
          subtitle=""
          description=""
          showContactInfo={false}
        />
      </div>

      {/* Article Title */}
      <div className="mt-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 max-w-4xl mx-auto">
          {article.title}
        </h1>
      </div>

      {/* Article Content */}
      <div className="w-full mt-12 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Text */}
          <div className="w-full lg:w-[60%] space-y-12">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-green-700 mb-4">{sec.heading}</h2>
                <p className="text-gray-800 leading-relaxed mb-4">{sec.content}</p>
                {sec.list && sec.list.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    {sec.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {sec.images && sec.images.length > 0 && (
                  <div className="relative mt-4">
                    <SectionImageSlider images={sec.images} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-base mb-3">{t("LET'S_SHARE_TEXT")}</h3>
              <div className="flex space-x-4 text-2xl text-blue-600">
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>

            <div className="bg-[#17354c] text-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">{t('GET_FREE_CONSULTATION')}</h3>
              <form className="space-y-3 text-sm">
                <input className="w-full p-2 rounded bg-white text-black" placeholder={t('FIRST_NAME_HEADING', 'First Name')} />
                <input className="w-full p-2 rounded bg-white text-black" placeholder={t('LAST_NAME_HEADING', 'Last Name')} />
                <input className="w-full p-2 rounded bg-white text-black" placeholder={t('EMAIL_HEADING', 'Email')} />
                <input className="w-full p-2 rounded bg-white text-black" placeholder={t('MOBILE_NUMBER_HEADING', 'Mobile Number')} />
                <select className="w-full p-2 rounded bg-white text-black">
                  <option>{t('NATIONALITY')}</option>
                </select>
                <div className="flex gap-4">
                  <label><input type="radio" name="mode" /> {t('MOBILE_NUMBER_HEADING', 'Phone')}</label>
                  <label><input type="radio" name="mode" /> {t('EMAIL_HEADING', 'Email')}</label>
                </div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" /> {t("I'VE_READ_TEXT")}
                </label>
                <button className="bg-red-600 text-white w-full p-2 rounded hover:bg-red-700">{t('GET_FREE_CONSULTATION')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <RegisterInterestForm />
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
