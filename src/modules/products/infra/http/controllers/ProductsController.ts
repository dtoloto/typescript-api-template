import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';

const products = [
  {
    'CODITEM': 290,
    'DESCRICAO_ITEM': 'BUCHA BANDEJA SUSPENSAO MASTER TODAS ATE 2012',
    'OBS_TECNICA': 'MASTER TODAS ATE 2012 / SUPERIOR / ALUMêNIO',
    'TIPO_IMG_VEICULO': 'APL',
    'TIPO_IMG_PECA': 'ITE',
    'REF_TANTTO': 'TAN.7700302115',
    'PATH_IMG_VEICULO': '',
    'PATH_IMG_PECA': ''
  },
  {
    'CODITEM': 291,
    'DESCRICAO_ITEM': 'COXIM CAMBIO MASTER TODAS ATE 2012',
    'OBS_TECNICA': 'RENAULT MASTER TODAS ATE 2012 / CAMBIO / RAQUETE',
    'TIPO_IMG_VEICULO': 'APL',
    'TIPO_IMG_PECA': 'ITE',
    'REF_TANTTO': 'TAN.112383100R',
  },
  {
    'CODITEM': 292,
    'DESCRICAO_ITEM': 'COXIM MOTOR DUCATO / BOXER / JUMPER TODAS 2002 ATE 2004',
    'OBS_TECNICA': 'DUCATO/BOXER/JUMPER TODAS DE 2002 ATE 2004 / RE PRA FRENTE / ESQUERDO / DIREITO / SEM ORELHA / SEM SUPORTE',
    'TIPO_IMG_VEICULO': 'APL',
    'TIPO_IMG_PECA': 'ITE',
    'REF_TANTTO': 'TAN.1333573080	',
    'PATH_IMG_VEICULO': '',
    'PATH_IMG_PECA': ''
  },
  {
    'CODITEM': 293,
    'DESCRICAO_ITEM': 'COXIM MOTOR DUCATO / BOXER / JUMPER TODAS 2005 ATE 2009',
    'OBS_TECNICA': 'COXIM MOTOR DIREITO DUCATO / BOXER / JUMPER TODAS 2005 ATE 2019 / RE PRA FRENTE / CAMBIO MLGU',
    'TIPO_IMG_VEICULO': 'APL',
    'TIPO_IMG_PECA': 'ITE',
    'REF_TANTTO': 'TAN.1335129080',
    'PATH_IMG_VEICULO': '',
    'PATH_IMG_PECA': ''
  },
  {
    'CODITEM': 294,
    'DESCRICAO_ITEM': 'COXIM CAMBIO DUCATO / BOXER / JUMPER TODAS ATE 2009',
    'OBS_TECNICA': 'DUCATO / BOXER / JUMPER TODAS ATE 2009 / CHAPEU NAPOLEAO / ESQUERDO',
    'TIPO_IMG_VEICULO': 'APL',
    'TIPO_IMG_PECA': 'ITE',
    'REF_TANTTO': 'TAN.1308696080',
    'PATH_IMG_VEICULO': '',
    'PATH_IMG_PECA': ''
  },
]

export default class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ products });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const product = products.find(item => item['CODITEM'] === Number(id));

    if (!product) {
      throw new AppError('Invalid product ID.', 400);
    }

    product['PATH_IMG_VEICULO'] = `/files/${product['CODITEM']}-${product['TIPO_IMG_VEICULO']}.jpg`;
    product['PATH_IMG_PECA'] = `/files/${product['CODITEM']}-${product['TIPO_IMG_PECA']}.jpg`;

    return res.json({ product });
  }
}
