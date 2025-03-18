import ip from 'ip';

export default {
  port: {
    main: 4000,
    micro: 3000
  },
  host: ip.address()
};