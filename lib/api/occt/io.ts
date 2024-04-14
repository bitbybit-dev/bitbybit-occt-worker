import { Inputs } from "@bitbybit-dev/occt";
import { OCCTWorkerManager } from "../../occ-worker/occ-worker-manager";

export class OCCTIO {

    constructor(
        readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Saves the step file
     * @param inputs STEP filename and shape to be saved
     * @group io
     * @shortname save step
     * @drawable false
     */
    async saveShapeSTEP(inputs: Inputs.OCCT.SaveStepDto<Inputs.OCCT.TopoDSShapePointer>): Promise<void> {
        this.saveSTEP(inputs);
    }

    /**
     * Saves the step file and returns the text value
     * @param inputs STEP filename and shape to be saved
     * @group io
     * @shortname save step and return
     * @drawable false
     */
    async saveShapeSTEPAndReturn(inputs: Inputs.OCCT.SaveStepDto<Inputs.OCCT.TopoDSShapePointer>): Promise<string> {
        return this.saveSTEP(inputs);
    }

    private saveSTEP(inputs: Inputs.OCCT.SaveStepDto<Inputs.OCCT.TopoDSShapePointer>): Promise<string> {
        return this.occWorkerManager.genericCallToWorkerPromise("io.saveShapeSTEP", inputs).then(s => {
            if (inputs.tryDownload && document) {
                const blob = new Blob([s], { type: "text/plain" });
                const blobUrl = URL.createObjectURL(blob);

                const fileName = inputs.fileName ? inputs.fileName : "bitbybit-dev.step";

                const fileLink = document.createElement("a");
                fileLink.href = blobUrl;
                fileLink.target = "_self";
                fileLink.download = fileName;
                fileLink.click();
                fileLink.remove();
            }
            return s;
        });
    }

}
