import PDFPlus from 'main';
import { patchPDFInternals } from 'patchers/pdf';


export const patchPDFInternalFromPDFEmbed = (plugin: PDFPlus): boolean => {
    if (plugin.patchStatus.pdfInternals) return true;

    const { api } = plugin;

    const pdfEmbed = api.getPDFEmbed();
    if (pdfEmbed) patchPDFInternals(plugin, pdfEmbed.viewer);

    // don't return true here; if the patch is successful, plugin.patchStatus.pdfInternals
    // will be set to true when this function is called next time
    return false;
}
