import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailCOntact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailCOntact;
  from?: IMailCOntact;
  subject: string;
  template: IParseMailTemplateDTO;
}
