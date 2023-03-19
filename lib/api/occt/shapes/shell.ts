import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTShell {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Creates a shell from faces
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/shell/sewFaces.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_shell.OCCTShell.html#sewFaces
     * @param inputs OpenCascade shell and faces
     * @returns OpenCascade shell
     * @group create
     * @shortname sew
     */
    sewFaces(inputs: Inputs.OCCT.SewDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSShellPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.shell.sewFaces', inputs);
    }

    /**
     * Get shell surface area
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/shell/getShellSurfaceArea.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_shell.OCCTShell.html#getShellSurfaceArea
     * @param inputs shell shape
     * @returns Surface area
     * @group get
     * @shortname area
     */
     getShellSurfaceArea(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShellPointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.shell.getShellSurfaceArea', inputs);
    }
}
