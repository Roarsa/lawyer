import Req from './request';

export const sendFormContactUs = data => {
  console.log('in api');
  Req.POST({
    url: '/requestConsultation',
    data,
  });
}
