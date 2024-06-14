"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransaksiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_transaksi_dto_1 = require("./create-transaksi.dto");
class UpdateTransaksiDto extends (0, mapped_types_1.PartialType)(create_transaksi_dto_1.CreateTransaksiDto) {
}
exports.UpdateTransaksiDto = UpdateTransaksiDto;
//# sourceMappingURL=update-transaksi.dto.js.map