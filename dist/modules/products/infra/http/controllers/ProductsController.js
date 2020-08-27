"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
var products = [
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
];
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, res.json({ products: products })];
            });
        });
    };
    ProductsController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product;
            return __generator(this, function (_a) {
                id = req.params.id;
                product = products.find(function (item) { return item['CODITEM'] === Number(id); });
                if (!product) {
                    throw new AppError_1.default('Invalid product ID.', 400);
                }
                product['PATH_IMG_VEICULO'] = "/files/" + product['CODITEM'] + "-" + product['TIPO_IMG_VEICULO'] + ".jpg";
                product['PATH_IMG_PECA'] = "/files/" + product['CODITEM'] + "-" + product['TIPO_IMG_PECA'] + ".jpg";
                return [2 /*return*/, res.json({ product: product })];
            });
        });
    };
    return ProductsController;
}());
exports.default = ProductsController;
