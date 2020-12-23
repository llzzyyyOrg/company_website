var Index = require('../controller/web/index');



module.exports = function(app) {
  //��ҳ
  app.get('/', Index.index);

  //�߽��и����
  app.get('/company_intro', Index.company_intro);
  app.get('/culture', Index.culture);
  app.get('/organize', Index.organize);
  app.get('/process', Index.process);

  //��������
  app.get('/company_dynamic', Index.company_dynamic);
  app.get('/media_report', Index.media_report);
  app.get('/activity_report', Index.activity_report);

  //���䰸��
  app.get('/classic_case', Index.classic_case);

  //�������
  app.get('/partner', Index.partner);

  //������Դ
  app.get('/recruit', Index.recruit);
  app.get('/benefits', Index.benefits);
  app.get('/staff_style', Index.staff_style);

  //��ϵ����
  app.get('/contact_us', Index.contact_us);

  //��ҳ��ȡ����
  app.get('/web/get_news', Index.get_news);
  //��ҳ��ȡ��Ƹ��Ϣ
  app.get('/web/get_recruits', Index.get_recruits);
  //��ҳ��ȡ��ְ������Ϣ
  app.get('/web/get_quits', Index.get_quits);
  //�����ȡ����
  app.post('/web/get_news_by_Category', Index.get_news_by_Category);

  //��ȡ��˾��̬
  app.get('/news_detail/:id', Index.get_news_detail);
  //��ȡ��˾��̬
  app.post('/news_detail/:id', Index.post_news_detail);
  //��ȡý�屨��
  app.get('/media_report_detail/:id', Index.get_media_report_detail);
  //��ȡý�屨��
  app.post('/media_report_detail/:id', Index.post_media_report_detail);
  //��ȡ�����
  app.get('/activity_report_detail/:id', Index.get_activity_report_detail);
  //��ȡ�����
  app.post('/activity_report_detail/:id', Index.post_activity_report_detail);

  //������Դҳ��
  //��ҳ��ȡ��Ƹ��Ϣ
  app.post('/web/get_recruits_page', Index.get_recruits_page);
  //��ҳ��ȡ��ְ��Ϣ
  app.post('/web/get_quit_page', Index.get_quit_page);

  //��ת����Ƹ����ҳ��
  app.get('/recruit_requirment/:id', Index.get_recruit_requirment);
  //��ȡ��Ƹ������Ϣ
  app.post('/recruit_requirment/:id', Index.post_recruit_requirment);


  //�û���ӷ�����Ϣ
  app.post('/post_feedback', Index.post_feedback);






};