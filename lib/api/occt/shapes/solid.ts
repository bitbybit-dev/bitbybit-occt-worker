import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTSolid {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Creates Solid From shell that must be closed
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createBox.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createBox
     * @param inputs Closed shell to make into solid
     * @returns OpenCascade Solid
     * @group from
     * @shortname shell
     * @drawable true
     */
    fromClosedShell(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShellPointer>): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.fromClosedShell', inputs);
    }

    /**
     * Creates OpenCascade Box
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createBox.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createBox
     * @param inputs Box size and center
     * @returns OpenCascade Box
     * @group primitives
     * @shortname box
     * @drawable true
     */
    createBox(inputs: Inputs.OCCT.BoxDto): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createBox', inputs);
    }

    /**
     * Creates OpenCascade Box from corner
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createBoxFromCorner.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createBoxFromCorner
     * @param inputs Box size and corner coordinates
     * @returns OpenCascade Box
     * @group primitives
     * @shortname box corner
     * @drawable true
     */
    createBoxFromCorner(inputs: Inputs.OCCT.BoxFromCornerDto): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createBoxFromCorner', inputs);
    }

    /**
     * Creates OpenCascade Cylinder
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createCylinder.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCylinder
     * @param inputs Cylinder parameters
     * @returns OpenCascade Cylinder
     * @group primitives
     * @shortname cylinder
     * @drawable true
     */
    createCylinder(inputs: Inputs.OCCT.CylinderDto): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createCylinder', inputs);
    }

    /**
     * Creates OpenCascade Cylinders on simple bit by bit lines represented by two points
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createCylindersOnLines.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCylindersOnLines
     * @param inputs Cylinder parameters
     * @returns OpenCascade Cylinder
     * @group primitives
     * @shortname cylinders on lines
     * @drawable true
     */
    createCylindersOnLines(inputs: Inputs.OCCT.CylindersOnLinesDto): Promise<Inputs.OCCT.TopoDSSolidPointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createCylindersOnLines', inputs);
    }

    /**
     * Creates OpenCascade Sphere
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createSphere.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createSphere
     * @param inputs Sphere radius and center
     * @returns OpenCascade Sphere
     * @group primitives
     * @shortname sphere
     * @drawable true
     */
    createSphere(inputs: Inputs.OCCT.SphereDto): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createSphere', inputs);
    }

    /**
     * Creates OpenCascade Cone
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/createCone.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCone
     * @param inputs Cone parameters
     * @returns OpenCascade cone shape
     * @group primitives
     * @shortname cone
     * @drawable true
     */
    createCone(inputs: Inputs.OCCT.ConeDto): Promise<Inputs.OCCT.TopoDSSolidPointer> {
        inputs.angle = inputs.angle * (Math.PI / 180);
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.createCone', inputs);
    }

    /**
     * Get solid surface area
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/getSolidSurfaceArea.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#getSolidSurfaceArea
     * @param inputs Closed solid shape
     * @returns Surface area
     * @group get
     * @shortname area
     * @drawable false
     */
    getSolidSurfaceArea(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSSolidPointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.getSolidSurfaceArea', inputs);
    }

    /**
    * Get solid volume
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/solid/getSolidVolume.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#getSolidVolume
    * @param inputs Closed solid shape
    * @returns volume
    * @group get
    * @shortname volume
    * @drawable false
    */
    getSolidVolume(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSSolidPointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.getSolidVolume', inputs);
    }

    /**
    * Get solids volumes
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/solid/getSolidsVolumes.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#getSolidsVolumes
    * @param inputs Closed solid shapes
    * @returns volumes
    * @group get
    * @shortname volumes
    * @drawable false
    */
    getSolidsVolumes(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSSolidPointer>): Promise<number[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.getSolidsVolumes', inputs);
    }

    /**
    * Get solid center of mass
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/solid/getSolidCenterOfMass.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#getSolidCenterOfMass
    * @param inputs Closed solid shape
    * @returns center of mass point
    * @group get
    * @shortname center of mass
    * @drawable true
    */
    getSolidCenterOfMass(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSSolidPointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.getSolidCenterOfMass', inputs);
    }

    /**
     * Get centers of mass of solids
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/solid/getSolidsCentersOfMass.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#getSolidsCentersOfMass
     * @param inputs Closed solid shapes
     * @returns Points indicating centers of mass
    * @group get
    * @shortname centers of mass
    * @drawable true
     */
    getSolidsCentersOfMass(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSSolidPointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.solid.getSolidsCentersOfMass', inputs);
    }
}
