import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTFace {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }
    /**
     * Creates a face from wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createFaceFromWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createFaceFromWire
     * @param inputs OpenCascade wire shape and indication if face should be planar
     * @returns OpenCascade face shape
     * @group from
     * @shortname wire
     */
    createFaceFromWire(inputs: Inputs.OCCT.FaceFromWireDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createFaceFromWire', inputs);
    }

    /**
     * Creates faces from wires
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createFacesFromWires.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createFacesFromWires
     * @param inputs OpenCascade wire shape and indication if face should be planar
     * @returns OpenCascade face shape
     * @group from
     * @shortname wires
     */
    createFacesFromWires(inputs: Inputs.OCCT.FaceFromWireDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSFacePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createFacesFromWires', inputs);
    }

    /**
     * Creates a face from the surface
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/faceFromSurface.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#faceFromSurface
     * @param inputs Face shape
     * @returns OpenCascade surface
     * @group from
     * @shortname surface
     */
    faceFromSurface(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.GeomSurfacePointer>): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.faceFromSurface', inputs);
    }

    /**
     * Creates a face from the surface and a wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/faceFromSurfaceAndWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#faceFromSurfaceAndWire
     * @param inputs OpenCascade surface, a wire and indication wether face should be created inside or not
     * @returns Face shape
     * @group from
     * @shortname surface and wire
     */
    faceFromSurfaceAndWire(inputs: Inputs.OCCT.FaceFromSurfaceAndWireDto<Inputs.OCCT.GeomSurfacePointer, Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSFacePointer> {
        inputs.shapes = [inputs.surface, inputs.wire];
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.faceFromSurfaceAndWire', inputs);
    }

    /**
     * Creates OpenCascade Polygon face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createPolygonFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createPolygonFace
     * @param inputs Polygon points
     * @returns OpenCascade polygon face
     * @group primitives
     * @shortname polygon
     */
    createPolygonFace(inputs: Inputs.OCCT.PolygonDto): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createPolygonFace', inputs);
    }

    /**
     * Creates OpenCascade circle face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createCircleFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createCircleFace
     * @param inputs Circle parameters
     * @returns OpenCascade circle face
     * @group primitives
     * @shortname circle
     */
    createCircleFace(inputs: Inputs.OCCT.CircleDto): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createCircleFace', inputs);
    }

    /**
     * Creates OpenCascade ellipse face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createEllipseFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createEllipseFace
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse face
     * @group primitives
     * @shortname ellipse
     */
    createEllipseFace(inputs: Inputs.OCCT.EllipseDto): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createEllipseFace', inputs);
    }

    /**
     * Creates OpenCascade square face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createSquareFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createSquareFace
     * @param inputs Square parameters
     * @returns OpenCascade square face
     * @group primitives
     * @shortname square
     */
    createSquareFace(inputs: Inputs.OCCT.SquareDto): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createSquareFace', inputs);
    }

    /**
     * Creates OpenCascade rectangle face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/createRectangleFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createRectangleFace
     * @param inputs rectangle parameters
     * @returns OpenCascade rectangle
     * @group primitives
     * @shortname rectangle
     */
    createRectangleFace(inputs: Inputs.OCCT.RectangleDto): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.createRectangleFace', inputs);
    }

    /**
     * Gets the face by providing an index from the shape
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFace
     * @param inputs Shape
     * @returns OpenCascade face
     * @group get
     * @shortname face
     */
    getFace(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFace', inputs);
    }

    /**
     * Gets the faces of the shape in a list
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFaces.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFaces
     * @param inputs Shape
     * @returns OpenCascade faces array
     * @group get
     * @shortname faces
     */
    getFaces(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSFacePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFaces', inputs);
    }

    /**
     * Computes reversed face from input face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/reversedFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#reversedFace
     * @param inputs Face
     * @returns OpenCascade face
     * @group get
     * @shortname reversed
     */
    reversedFace(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.reversedFace', inputs);
    }

    /**
     * Subdivides a face to point grid
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/subdivideToPoints.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#subdivideToPoints
     * @param inputs Face and params for subdivision
     * @returns points
     * @group extract
     * @shortname points
     */
    subdivideToPoints(inputs: Inputs.OCCT.FaceSubdivisionDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.subdivideToPoints', inputs);
    }

    /**
     * Subdivides a face to point grid with shifts and removals on nth uv rows or columns
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/subdivideToPointsControlled.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#subdivideToPointsControlled
     * @param inputs Face and params for subdivision
     * @returns points
     * @group extract
     * @shortname points nth
     */
    subdivideToPointsControlled(inputs: Inputs.OCCT.FaceSubdivisionControlledDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.subdivideToPointsControlled', inputs);
    }

    /**
     * Subdivides a face to normals grid
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/subdivideToNormals.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#subdivideToNormals
     * @param inputs Face and params for subdivision
     * @returns normal vectors
     * @group extract
     * @shortname normals
     */
    subdivideToNormals(inputs: Inputs.OCCT.FaceSubdivisionDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Vector3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.subdivideToNormals', inputs);
    }

    /**
     * Subdivides a face to uv grid
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/subdivideToUV.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#subdivideToUV
     * @param inputs Face and params for subdivision
     * @returns uv params in array
     * @group extract
     * @shortname uvs
     */
    subdivideToUV(inputs: Inputs.OCCT.FaceSubdivisionDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point2[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.subdivideToUV', inputs);
    }

    /**
     * Get point on UV where U and V are described between 0 and 1. These will be mapped to real bounds.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/pointOnUV.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#pointOnUV
     * @param inputs Face and params for subdivision
     * @returns point
     * @group extract
     * @shortname point on uv
     */
    pointOnUV(inputs: Inputs.OCCT.DataOnUVDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.pointOnUV', inputs);
    }

    /**
     * Get normal on UV where U and V are described between 0 and 1. These will be mapped to real bounds.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/normalOnUV.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#normalOnUV
     * @param inputs Face and params for subdivision
     * @returns normal vector
     * @group extract
     * @shortname normal on uv
     */
    normalOnUV(inputs: Inputs.OCCT.DataOnUVDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Vector3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.normalOnUV', inputs);
    }

    /**
     * Get points on UVs where U and V are described between 0 and 1 in two dimensional arrays. These will be mapped to real bounds.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/pointOnUV.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#pointOnUV
     * @param inputs Face and params for subdivision
     * @returns points
     * @group extract
     * @shortname points on uvs
     */
    pointsOnUVs(inputs: Inputs.OCCT.DataOnUVsDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.pointsOnUVs', inputs);
    }

    /**
     * Get normals on UVs where U and V are described between 0 and 1 in two dimensional arrays. These will be mapped to real bounds.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/normalsOnUVs.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#normalsOnUVs
     * @param inputs Face and params for subdivision
     * @returns normals
     * @group extract
     * @shortname normals on uvs
     */
    normalsOnUVs(inputs: Inputs.OCCT.DataOnUVsDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Vector3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.normalsOnUVs', inputs);
    }

    /**
     * Subdivides a face to points along a line on parameter
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/subdivideToPointsOnParam.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#subdivideToPointsOnParam
     * @param inputs Face and params for subdivision
     * @returns points
     * @group extract
     * @shortname points on param
     */
    subdivideToPointsOnParam(inputs: Inputs.OCCT.FaceLinearSubdivisionDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.subdivideToPointsOnParam', inputs);
    }

    /**
     * Gets the U min bound of the face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getUMinBound.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getUMinBound
     * @param inputs OCCT Face
     * @returns u min bound
     * @group get
     * @shortname u min
     */
    getUMinBound(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getUMinBound', inputs);
    }

    /**
     * Gets the U max bound of the face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getUMaxBound.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getUMaxBound
     * @param inputs OCCT Face
     * @returns u max bound
     * @group get
     * @shortname u max
     */
    getUMaxBound(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getUMaxBound', inputs);
    }

    /**
     * Gets the V min bound of the face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getVMinBound.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getVMinBound
     * @param inputs OCCT Face
     * @returns v min bound
     * @group get
     * @shortname v min
     */
    getVMinBound(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getVMinBound', inputs);
    }

    /**
     * Gets the V max bound of the face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getVMaxBound.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getVMaxBound
     * @param inputs OCCT Face
     * @returns v max bound
     * @group get
     * @shortname v max
     */
    getVMaxBound(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getVMaxBound', inputs);
    }

    /**
     * Get the area of the face
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFaceArea.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFaceArea
     * @param inputs OCCT Face
     * @returns area
     * @group get
     * @shortname face area
     */
    getFaceArea(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFaceArea', inputs);
    }

    /**
     * Get the areas of the faces
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFacesAreas.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFacesAreas
     * @param inputs OCCT Faces
     * @returns areas
     * @group get
     * @shortname areas of faces
     */
    getFacesAreas(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSFacePointer>): Promise<number[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFacesAreas', inputs);
    }

    /**
     * Get the face center of mass point
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFaceCenterOfMass.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFaceCenterOfMass
     * @param inputs OCCT Face
     * @returns point
     * @group get
     * @shortname center of mass
     */
    getFaceCenterOfMass(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFaceCenterOfMass', inputs);
    }

    /**
     * Get the face center of mass point
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/face/getFaceCenterOfMass.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFaceCenterOfMass
     * @param inputs OCCT Faces
     * @returns points
     * @group get
     * @shortname centers of mass
     */
    getFacesCentersOfMass(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.face.getFacesCentersOfMass', inputs);
    }

}
