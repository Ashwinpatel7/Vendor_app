import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Vendor from '@/lib/models/Vendor'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const vendors = await Vendor.find({}).skip(skip).limit(limit).sort({ createdAt: -1 })
    const total = await Vendor.countDocuments({})

    return NextResponse.json({
      vendors,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch vendors' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    
    const body = await request.json()
    const vendor = new Vendor(body)
    await vendor.save()

    return NextResponse.json(vendor, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create vendor' }, { status: 500 })
  }
}