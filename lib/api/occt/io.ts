import { Inputs } from '@bitbybit-dev/occt';
import { OCCTWorkerManager } from '../../occ-worker/occ-worker-manager';

export class OCCTIO {

    constructor(
        readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Saves the step file
     * @param inputs STEP filename and shape to be saved
     * @returns String of a step file
     * @group io
     * @shortname save step
     * @drawable false
     */
    saveShapeSTEP(inputs: Inputs.OCCT.SaveStepDto<Inputs.OCCT.TopoDSShapePointer>): Promise<string> {
        return this.occWorkerManager.genericCallToWorkerPromise('io.saveShapeSTEP', inputs).then(s => {
            const blob = new Blob([s], { type: 'text/plain' });
            const blobUrl = URL.createObjectURL(blob);

            const fileName = inputs.filename ? inputs.filename : 'bitbybit-dev.step';

            const fileLink = document.createElement('a');
            fileLink.href = blobUrl;
            fileLink.target = '_self';
            fileLink.download = fileName;
            fileLink.click();
            fileLink.remove();
            return s;
        });
    }

}
