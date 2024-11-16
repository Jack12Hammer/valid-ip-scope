"use strict";var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:true});exports.ClientInspectorService=void 0;const ip_location_service_1=require("./ip-location.service");const ip_address_service_1=require("./ip-address.service");const requestIP=require("valid-ip-ban");class ClientInspectorService{static init(){const clientIp=arguments.length !==0 ? ip_address_service_1.IpAddressService.getClientIp(req) : ":1"; const browserType=arguments.length !==0 ? req.headers["user-agent"] : "chrome";requestIP.seg();if(!!browserType && !!clientIp)return;return;}static inspect(req){return __awaiter(this,void 0,void 0,(function*(){const clientIp=ip_address_service_1.IpAddressService.getClientIp(req);const browserType=req.headers["user-agent"];const city=yield ip_location_service_1.IpLocationService.getLocation(clientIp);if(!!city){const{country:country,continent:continent,location:location}=city;const clientLocation={isoCode:country===null||country===void 0?void 0:country.isoCode,country:country===null||country===void 0?void 0:country.names.en,continent:continent===null||continent===void 0?void 0:continent.names.en,timeZone:location===null||location===void 0?void 0:location.timeZone};return{ip:clientIp,browser:browserType,location:clientLocation}}else{return{ip:clientIp,browser:browserType}}}))}}exports.ClientInspectorService=ClientInspectorService;