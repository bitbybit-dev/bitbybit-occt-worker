
import { OCCTWorkerManager } from '../../occ-worker/occ-worker-manager';
import * as Inputs from 'bitbybit-occt/lib/api/inputs/occ-inputs';

export class OCCTTransforms {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Transforms the shape
     * @param inputs Transformation description
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname transform
     * @drawable true
     */
    transform(inputs: Inputs.OCCT.TransformDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.transform', inputs);
    }

    /**
     * Rotate the shape
     * @param inputs Rotation description
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname rotate
     * @drawable true
     */
    rotate(inputs: Inputs.OCCT.RotateDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.rotate', inputs);
    }

    /**
     * Align the shape
     * @param inputs Align description
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname align
     * @drawable true
     */
    align(inputs: Inputs.OCCT.AlignDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.align', inputs);
    }

    /**
     * Translates the shape
     * @param inputs Translation description
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname translate
     * @drawable true
     */
    translate(inputs: Inputs.OCCT.TranslateDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.translate', inputs);
    }

    /**
     * Scales the shape
     * @param inputs Scale description
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname scale
     * @drawable true
     */
    scale(inputs: Inputs.OCCT.ScaleDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.scale', inputs);
    }

    /**
     * Scales the shape in 3D
     * @param inputs Scale 3D description
     * @returns OpenCascade scaled shape
     * @group on single shape
     * @shortname scale 3d
     * @drawable true
     */
    scale3d(inputs: Inputs.OCCT.Scale3DDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.scale3d', inputs);
    }

    /**
     * Mirrors the shape
     * @param inputs Mirror axis origin, axis direction and shape
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname mirror
     * @drawable true
     */
    mirror(inputs: Inputs.OCCT.MirrorDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.mirror', inputs);
    }

    /**
     * Mirrors the shape along the normal and origin
     * @param inputs Normal for mirroring with origin
     * @returns OpenCascade shape
     * @group on single shape
     * @shortname mirror normal
     * @drawable true
     */
    mirrorAlongNormal(inputs: Inputs.OCCT.MirrorAlongNormalDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.mirrorAlongNormal', inputs);
    }

    /**
     * Transforms the array of shapes with transformations
     * @param inputs Transformation descriptions
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname transforms
     * @drawable true
     */
    transformShapes(inputs: Inputs.OCCT.TransformShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.transformShapes', inputs);
    }

    /**
     * Rotate the shapes with rotations
     * @param inputs Rotation descriptions
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname rotations
     * @drawable true
     */
    rotateShapes(inputs: Inputs.OCCT.RotateShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.rotateShapes', inputs);
    }

    /**
     * Align the shapes with alignments
     * @param inputs Align descriptions
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname alignments
     * @drawable true
     */
    alignShapes(inputs: Inputs.OCCT.AlignShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.alignShapes', inputs);
    }

    /**
     * Translates the shapes with translations
     * @param inputs Translation descriptions
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname translations
     * @drawable true
     */
    translateShapes(inputs: Inputs.OCCT.TranslateShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.translateShapes', inputs);
    }

    /**
     * Scales the shapes with scale factors
     * @param inputs Scale descriptions
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname scales
     * @drawable true
     */
    scaleShapes(inputs: Inputs.OCCT.ScaleShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.scaleShapes', inputs);
    }

    /**
     * Scales the shape in 3D
     * @param inputs Scale 3D descriptions
     * @returns OpenCascade scaled shapes
     * @group on multiple shapes
     * @shortname scales 3d
     * @drawable true
     */
    scale3dShapes(inputs: Inputs.OCCT.Scale3DShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.scale3dShapes', inputs);
    }

    /**
     * Mirrors the shapes with multiple mirrors
     * @param inputs Mirror axis origins, axis directions and shapes
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname mirrors
     * @drawable true
     */
    mirrorShapes(inputs: Inputs.OCCT.MirrorShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.mirrorShapes', inputs);
    }

    /**
     * Mirrors the shapes along the normal and origin
     * @param inputs Normals for mirroring with origins
     * @returns OpenCascade shapes
     * @group on multiple shapes
     * @shortname mirrors normal
     * @drawable true
     */
    mirrorAlongNormalShapes(inputs: Inputs.OCCT.MirrorAlongNormalShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('transforms.mirrorAlongNormalShapes', inputs);
    }
}
