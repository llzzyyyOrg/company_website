
var Admin = require('../controller/admin/admin');


module.exports = function(app) {

  //��ת����¼ҳ��
  app.get('/login',Admin.login);
  //��ת����¼ҳ��
  app.get('/register',Admin.register);
  // ��̨��ҳ
  app.get('/admin', Admin.admin);

  //��������
  app.post('/admin/add_news', Admin.add_news);
  //��ҳ��ȡ����
  app.post('/admin/get_news', Admin.get_news);
  //�鿴��������
  app.post('/admin/news_content', Admin.get_news_detail);
  //ɾ������
  app.post('/admin/news_del', Admin.del_one);

  //���Ӱ���
  app.post('/admin/add_case', Admin.add_case);
  //��ҳ��ȡ����
  app.post('/admin/get_case', Admin.get_case);
  app.post('/admin/get_case_top', Admin.get_case_top);
  //�鿴��������
  app.post('/admin/case_detail', Admin.get_case_detail);
  //ɾ������
  app.post('/admin/case_del', Admin.del_case);
  app.post('/admin/case_top', Admin.set_case_top);

  //������Ƹ
  app.post('/admin/add_recruit', Admin.add_recruit);
  //��ȡ��Ƹ��Ϣ
  app.post('/admin/get_recruits', Admin.get_recruits);
  //�鿴��Ƹ����
  app.post('/admin/recruit_content', Admin.get_recruit_content);
  //�鿴��Ƹ
  app.post('/admin/recruit_del', Admin.del_recruit);

  //������ְ��ʾ
  app.post('/admin/add_quit', Admin.add_quit);
  //��ҳ��ȡ��ְ��ʾ
  app.post('/admin/get_quits', Admin.get_quits);
  //ɾ����ְ��ʾ
  app.post('/admin/quit_del', Admin.del_quit);

  //���ӹ���Ա
  app.post('/admin/post_user', Admin.add_admin);
  //��ҳ��ȡ����Ա
  app.post('/admin/get_users', Admin.get_users);
  //ɾ������Ա��Ϣ
  app.post('/admin/user_del', Admin.user_del);

  //�ύ��¼��Ϣ��ʵ�ֵ�¼��ϢУ��
  app.post('/login',Admin.checkUser);
  //�ύע����Ϣ��ʵ��ע��У��
  app.post('/register',Admin.post_register);
  //�û��ǳ�����
  app.get('/logout',Admin.logout);
  //����ע����û���Ȩ
  app.post('/authorize',Admin.authorize);



  //��ҳ��ȡ�û�������Ϣ
  app.post('/admin/get_feedbacks',Admin.get_feedbacks);
  //��ҳ��ȡ�û�������Ϣ
  app.post('/admin/deal_feedbacks',Admin.deal_feedbacks);

  //��̨��ҳУ���Ƿ���δ�����ķ�����Ϣ
  app.get('/admin/check_feedbacks', Admin.check_feedbacks);


};